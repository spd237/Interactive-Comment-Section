import React from "react";

export default function Modal(props) {
  return (
    <>
      <div className=" mx-4 flex max-w-sm flex-col gap-3 rounded-lg bg-white px-5 py-6">
        <h2 className="text-xl font-semibold">Delete comment</h2>
        <p className="text-grayish-blue">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="flex justify-between">
          <button
            className=" rounded-md bg-grayish-blue py-2 px-6 uppercase text-white hover:opacity-75"
            onClick={() => props.handleIsDeleting()}
          >
            No, Cancel
          </button>
          <button
            className="rounded-md bg-soft-red py-2 px-6 uppercase text-white hover:opacity-75"
            onClick={() => props.deleteComment()}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </>
  );
}
