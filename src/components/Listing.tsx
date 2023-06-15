import ListingItem from "./ListingItem"
import {props} from '../assets/types'

const Listing = ({data}: props) => {
  return (
    <div className="item-list">
        {data.map((item)=> {
            return <ListingItem {...item} key={item.listing_id}/>
        })}
    </div>
  )
}

export default Listing


