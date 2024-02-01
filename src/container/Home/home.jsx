import react, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <>
        <p>Ini adalah component Yaoutube</p>
        <hr />
        <YoutubeComponent
          time="7.19"
          title="One Piece Episode 1"
          desc="Tayang 200x, 10 Hari yang lalu."
        />
        <YoutubeComponent
          time="9.00"
          title="One Piece Episode 2"
          desc="Tayang 300x, 9 Hari yang lalu."
        />
        <YoutubeComponent
          time="2.15"
          title="One Piece Episode 3"
          desc="Tayang 700x, 8 Hari yang lalu."
        />
        <YoutubeComponent
          time="3.33"
          title="One Piece Episode 4"
          desc="Tayang 800x, 7 Hari yang lalu."
        />
        <YoutubeComponent />

        <Product />
      </>
    );
  }
}

export default Home;
