function InputEmail() {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
      <span>
        <button type="button" className="btn btn-primary">
        Submit
        </button>
      </span>
    </div>
  );
}

export default InputEmail;
