import Link from "next/link";


export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/overview">Overview</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/reports">Explore</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/settings">Visualize</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/dashboard/settings">Strategize</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}