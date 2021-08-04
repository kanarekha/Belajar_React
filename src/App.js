import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="Parentbox">
      <FotoProduk />
      <ProdukInfo />
      
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="vans.png" />
    </div>
  );
}

function ProdukInfo() {
  const category = "Summer"
  return (
    <div class="Deskripsi">
        <p class="Cate">vans</p>
        <h1 class="Title">PRIMARY CHECK OLD SKOOL</h1>
        <p class="Price">IDR 9.000.000</p>
        <p class="Info">First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: 
        a random doodle drawn by founder Paul Van Doren, and originally referred to as 
        the “jazz stripe.” Today, the famous Vans Sidestripe has become 
        the unmistakable—and instantly recognizable—hallmark of the Vans brand.
        </p>
      </div>
  );
}


export default App;
