const Pagination = (props) => {
  
  const numPages = Math.ceil(props.total / props.limit);

  return (
    <>
      <button onClick={() => props.setPage(props.page - 1)} disabled={props.page === 1}>
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => props.setPage(i + 1)}
            aria-current={props.page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => props.setPage(props.page + 1)} disabled={props.page === numPages}>
        &gt;
      </button>
    </>
  );
}

export default Pagination;
