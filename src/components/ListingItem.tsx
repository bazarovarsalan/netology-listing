import { ListingItemProps } from "../assets/types"

const ListingItem = ({url, MainImage, title, currency_code, price, quantity}: ListingItemProps) => {
  
  function currencyFoo (cur:string, pr:string): string {
    let sign = undefined;
    if (cur === 'EUR') {
        sign = '€'
    } else if (cur === 'USD') {
        sign = '$'
    } else {
        sign = cur + ' '
    }
        return sign+pr
    }
    
    const priceOfItem = currencyFoo(currency_code, price);

    const classNameOfQuantity = (quantity:number) => {
        if (quantity <= 10) {
          return 'item-quantity level-low';
        } else if (quantity <= 20) {
          return 'item-quantity level-medium';   
        } else {
          return 'item-quantity level-high';   
        }
      }
  
    return (
        <>
    {title && <div className="item">
                <div className="item-image">
                <a href={url}>
                    <img src={MainImage?.url_570xN}/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{title?.length > 50 ? title.slice(0,50) + '...' : title}</p>
                <p className="item-price">{priceOfItem}</p>
                <p className={classNameOfQuantity(quantity)}>{quantity}</p>
                </div>
            </div>
    }
        </>
  )
}

export default ListingItem

