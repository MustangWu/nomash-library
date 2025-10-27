const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

// Capitalise book name after creation
exports.capitaliseBookName = onDocumentCreated("books/{bookId}", async (event) => {
  const snap = event.data;
  if (!snap) return null;
  const data = snap.data();
  if (!data || !data.name) return null;
  const capitalised = String(data.name).toUpperCase();
  await snap.ref.update({ name: capitalised });
  return null;
});

// Return all books in JSON
exports.getAllBooks = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const db = getFirestore();
  const snapshot = await db.collection("books").get();
  const books = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  res.json(books);
});

// Return total book count
exports.countBooks = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const db = getFirestore();
  const snapshot = await db.collection("books").get();
  res.json({ count: snapshot.size });
});