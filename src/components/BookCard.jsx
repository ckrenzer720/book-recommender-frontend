export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={book.coverUrl || "https://via.placeholder.com/150"}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-bold">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
    </div>
  );
}
