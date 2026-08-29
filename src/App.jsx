import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DemosPage from './pages/DemosPage'
import NorthlaneCRM from './demos/northlane/NorthlaneCRM'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demos" element={<DemosPage />} />
      <Route path="/demos/northlane-crm" element={<NorthlaneCRM />} />
    </Routes>
  )
}
