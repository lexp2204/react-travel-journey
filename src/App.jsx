import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){

    //Use arrayName.map() function to iterate the data in the data.js file and use it to create props for the entry component
    //The javascript function returns an array of Entry components using the data
    const entryElements= data.map((entry) => {
        return(
            <Entry 
                key={entry.id}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })

    //Here the Header component is getting render and the Javascript function rendering the Entry Component and its props
    //The entryElement function is being called to the page.
    return(
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
    
}