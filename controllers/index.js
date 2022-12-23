export const test = async (req, res) => {
  const testObject = {
    FirstName: "Random",
    SecondName: "Hero",
    Mobile: "1234567",
    Email: "randomherogamesofficial@gmail.com",
  };
  res.json(testObject);
};

export const anothertest = async (req, res) => {
  const testObject = {
    FirstName: "John",
    SecondName: "Smith",
    Mobile: "1234567",
    Email: "randomherogamesofficial@gmail.com",
  };
  res.json(testObject);
};
