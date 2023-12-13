import { Major_Mono_Display } from 'next/font/google';
import LoginForm from '@/components/Forms/LoginForm';


const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

type Props =  {}


const Login = (props : Props) => {
    return(
        <LoginForm/>
    )
}

export default Login