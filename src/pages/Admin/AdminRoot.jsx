import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Outlet } from "react-router"

function AdminRoot() {
  return (
    <>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </>
  )
}

export default AdminRoot