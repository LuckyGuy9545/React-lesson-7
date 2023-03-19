import useLocalStorage from 'hooks/useLocalStorage';

export default function SignupForm() {
  //* 2. вот тут масив используем
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  //*хорошая функция изменения State (динамическая)
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <form>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            //-- type='text' для удобства, правильно  - password
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

//* (1)
//  const [email, setEmail] = useState(
//    JSON.parse(window.localStorage.getItem('email')) ?? ''
//  );
//  const [password, setPassword] = useState(
//    JSON.parse(window.localStorage.getItem('password')) ?? ''
//  );

// useEffect(() => {
//     console.log('email useEffect');
//     window.localStorage.setItem('email', JSON.stringify(email));
//   }, [email]);

//   useEffect(() => {
//     console.log('password useEffect');
//     window.localStorage.setItem('password', JSON.stringify(password));
//   }, [password]);
