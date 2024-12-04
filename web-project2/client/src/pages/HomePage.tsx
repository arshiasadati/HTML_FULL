import CustomLayout from "../components/CustomLayout";
import image from '../assets/Dota2.jpg';
function HomePage() {
  return (
    <CustomLayout active="home">
      <div>
        <div className="home-page-card-1">
          <img src={image} alt="Image" className="home-page-card-1-img" />
          
        </div>
      </div>
    </CustomLayout>
  );
}

export default HomePage;
