import Navbar from '../components/Navbar'

function Home() {
    return <div>Welcome to Next.js!</div>
  }

const headStyle = {
  'text-align': 'center',
  'font-size': '100px'
};

const navStyle = {
  'text-align': 'left'
};

const Index = () => (
  <div> 
    <h1 style={headStyle}>Mistral</h1>
    <Navbar style={navStyle}>  </Navbar> 
  </div>
);
  
export default Index;