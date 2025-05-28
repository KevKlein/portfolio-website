import { FaTrashAlt, FaEdit } from "react-icons/fa";
import scooterUmbrella from '../../assets/scooter-passenger-umbrella.jpg'
import scooterDogPassenger from '../../assets/scooter-precarious-dog-passenger.jpg'
import scooterHelmets from '../../assets/scooter-many-orange-helmets.jpg'
import scooterPsyduck from '../../assets/scooter-front-psyduck-paint.jpg'
import scooterGoggleDog from '../../assets/scooter-dog-goggles-passenger.jpg'
import scooter3Riders from '../../assets/scooter-three-adult-riders.jpg'
import scooterParrots from '../../assets/scooter-parrot-perch-modification.jpg'
import scooterManyBoxes from '../../assets/scooter-many-boxes-cargo.jpg'
import scooterPlants from '../../assets/scooter-plant-obstruction-cargo.jpg'


function Shenanigan( { shenanigan, onEdit, onDelete } ) {
    const scooterAssets = {
        kkscooterUmbrella: scooterUmbrella, 
        kkscooterDogPassenger: scooterDogPassenger, 
        kkscooterHelmets: scooterHelmets, 
        kkscooterPsyduck: scooterPsyduck, 
        kkscooterGoggleDog: scooterGoggleDog, 
        kkscooter3Riders: scooter3Riders,
        kkscooterParrots: scooterParrots, 
        kkscooterManyBoxes: scooterManyBoxes, 
        kkscooterPlants: scooterPlants
    }


    const imageAsset = shenanigan.link.startsWith('kkscooter')
        ? scooterAssets[shenanigan.link] // interpret link as an imported local asset
        : shenanigan.link; // interpret link as an external URL
    
    console.log(imageAsset)

    return (
        <figure>          
            <img src={imageAsset} alt={shenanigan.description}/>
            <table>
                <tr><th>Description</th><td>{shenanigan.description}</td></tr>
                <tr><th>Observed</th><td>{shenanigan.date.slice(0,10)}</td></tr>
                <tr><th>Score</th><td>{shenanigan.score}</td></tr>
                <tr>
                    <td></td>
                    <td><FaTrashAlt onClick={() => onDelete(shenanigan._id)} className="icon" /></td>
                    <td><FaEdit onClick={() => onEdit(shenanigan)} className="icon" /></td>
                </tr>
            </table>
        </figure>
    );
}

export default Shenanigan;