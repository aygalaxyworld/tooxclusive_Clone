"use client";

import { useState } from "react";

interface SongReview {
  songTitle: string;
  artist: string;
  rating: number;
  comments: string;
}

export default function NewReview() {
  const [songTitle, setSongTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [rating, setRating] = useState<number>(5); // Default rating: 5
  const [comments, setComments] = useState<string>("");
  const [submittedReviews, setSubmittedReviews] = useState<SongReview[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview: SongReview = {
      songTitle,
      artist,
      rating,
      comments,
    };

    setSubmittedReviews([...submittedReviews, newReview]);

    // Reset form fields
    setSongTitle("");
    setArtist("");
    setRating(5);
    setComments("");
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Song Review Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="songTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Song Title:
          </label>
          <input
            type="text"
            id="songTitle"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="artist"
            className="block text-sm font-medium text-gray-700"
          >
            Artist:
          </label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating (1-10):
          </label>
          <input
            type="number"
            id="rating"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-gray-700"
          >
            Comments:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Submitted Reviews</h2>
      {submittedReviews.length > 0 ? (
        <ul className="mt-4">
          {submittedReviews.map((review, index) => (
            <li key={index} className="border border-gray-300 p-4 rounded mb-4">
              <strong>{review.songTitle}</strong> by {review.artist} - Rating:{" "}
              {review.rating}/10
              <p>Comments: {review.comments}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No reviews submitted yet.</p>
      )}
    </div>
  );
}
