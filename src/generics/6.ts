type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form

type Params = Omit<Form, "errors">;

const useForm: Params = {
  email: "example@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "1234567890",
};

console.log(useForm);
