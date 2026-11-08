import { profile } from "../data/Profile"

function Footer() {
    return (
        <div className="bg-black border-t border-gray-900 px-5 lg:px-20 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <p className="text-gray-600 text-xs font-mono">
                    © 2026 {profile.name} · {profile.domicile}
                </p>
                <p className="text-gray-600 text-xs font-mono">
                    {profile.entitas.split('/')[0]?.trim() || profile.entitas} · Informatika · UTY
                </p>
            </div>
        </div>
    )
}

export default Footer