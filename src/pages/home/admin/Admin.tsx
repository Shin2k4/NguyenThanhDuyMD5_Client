import './admin.scss'
import HeaderAdmin from './header/headerAdmin'
import { Outlet } from 'react-router-dom'
import Menu from './menu/menu'


export default function Admin({ modal }) {
  return (
    <div>
      <input type="checkbox" id="nav_toggle" />
      <Menu />
      <div className="main_content">
        <HeaderAdmin />
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}
