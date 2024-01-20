// import { useState } from 'react'
import {Layout} from 'antd';
import './App.css';
import NavHeader from '~/containers/NavHeader';
import LoginForm from '~/components/LoginForm';

const {Header, Content, Footer} = Layout;

const isUserLoggedIn = false;
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {
      !isUserLoggedIn ? 
      <div className='flex flex-col w-screen h-screen'>
        <h1 className='text-3xl font-bold w-full text-center'>Splitify</h1>
        <LoginForm />
      </div> :
      <section className='w-screen h-screen'>
        <Layout className='w-full h-full'>
          <Header className='p-0 h-16'>
            <NavHeader />
          </Header>
          <Content>

          </Content>
          <Footer />
        </Layout>
      </section>
    }
    </>
  )
}

export default App
