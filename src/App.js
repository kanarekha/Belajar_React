import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo category="SNEAKERS" name="Vans Old School" />
      
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

function ProdukInfo(props) {
  const { category , name} = props;
  return (
    <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 9.000.000</p>
        <p className="Info">First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: 
        a random doodle drawn by founder Paul Van Doren, and originally referred to as 
        the “jazz stripe.” Today, the famous Vans Sidestripe has become 
        the unmistakable—and instantly recognizable—hallmark of the Vans brand.
        </p>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
  );
}

function TambahCart(e) {
    return  console.log("Membeli " + e);
}


export default App;
