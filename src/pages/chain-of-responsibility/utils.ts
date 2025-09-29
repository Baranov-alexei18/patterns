export type FormData = { email: string; password: string };
export type Validator = (data: FormData, next: Validator) => boolean;

export const emailValidator: Validator = (data, next) => {
  if (!data.email.includes('@')) {
    alert('Email не валиден');
    return false;
  }
  return next(data, next);
};

export const passwordValidator: Validator = (data, next) => {
  if (data.password.length < 6) {
    alert('Пароль слишком короткий');
    return false;
  }
  return next(data, next);
};

export const defaultValidator: Validator = (_data, _next) => {
  alert('Все поля валидны!');
  return true;
};

export const chain = (...validators: Validator[]): ((data: FormData) => boolean) => {
  return (data: FormData) => {
    let i = 0;

    const next: Validator = (d) => {
      i++;
      if (i < validators.length) {
        return validators[i](d, next);
      }
      return true;
    };

    return validators[0](data, next);
  };
};

export const validateForm = chain(passwordValidator, emailValidator, defaultValidator);
