import Login from '../components/login/login';
import SignUp from '../components/login/signUp';

interface Props {
  register: boolean;
}

export default function LoginPage({ register = true }: Props) {
  return <>{register ? <SignUp /> : <Login />}</>;
}
