type Props = {Firstname:String , Lastname:String , Favoritegame:String}

function TitleLabel({Firstname , Lastname , Favoritegame}: Props) {
  return (
    <div>
        <h1>
            {Firstname} {Lastname}
        </h1>
        <p>
            {Favoritegame}
        </p>
    </div>
  )
}

export default TitleLabel