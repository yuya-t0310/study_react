import ClientComp from './components/ClientComp';
import './lib';

// サーバー側
export default function SSR() {

  return (
    <>
    <div>SSR Page</div>
    <ClientComp />
    </>    
  )
}