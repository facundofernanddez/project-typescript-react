export const Form = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nick" placeholder="nick" />
        <input type="text" name="subMonth" placeholder="subMonth" />
        <input type="text" name="avatar" placeholder="avatar" />
        <input type="text" name="description" placeholder="description" />

        <button>Save new sub!</button>
      </form>
    </div>
  );
};
