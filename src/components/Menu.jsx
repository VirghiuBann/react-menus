import MenuItem from './MenuItem'

const Menu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((item) => {
        return <MenuItem {...item} key={item.id} />
      })}
    </div>
  )
}

export default Menu
