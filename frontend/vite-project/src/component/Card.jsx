import react from 'react';

function Card({ book }) {
    return (
        <>
        <div className="card bg-base-100 w-85 md:w-97 shadow-sm">
  <figure>
    <img
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.title}
      <div className="badge badge-secondary">{book.category}</div>
    </h2>
    <p>{book.title}</p>
    <div className="card-actions sapce-around justify-between">
      <div className="badge badge-outline">{book.price}</div>
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>
        </>
    )
};

export default Card;