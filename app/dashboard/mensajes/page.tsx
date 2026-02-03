const conversations = [
  { id: '1', guest: 'Carlos Rodríguez', property: 'Apartamento Bocagrande', lastMessage: '¿A qué hora puedo hacer el check-in?', time: 'Hace 5 min', unread: true },
  { id: '2', guest: 'Ana María López', property: 'Penthouse El Poblado', lastMessage: '¿El apartamento tiene estacionamiento?', time: 'Hace 2 horas', unread: true },
  { id: '3', guest: 'John Smith', property: 'Apartamento Bocagrande', lastMessage: 'Perfect, thank you!', time: 'Ayer', unread: false },
  { id: '4', guest: 'Patricia Gómez', property: 'Casa Santa Marta', lastMessage: '¡Gracias por la información!', time: 'Hace 2 días', unread: false },
]

export default function MensajesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Mensajes</h1>
        <p className="text-white/50">Comunícate con tus huéspedes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
        {/* Conversations List */}
        <div className="bg-white/5 border border-white/10 rounded-2xl flex flex-col">
          <div className="p-4 border-b border-white/10">
            <input type="text" placeholder="Buscar conversaciones..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm placeholder-white/30 focus:border-amber-500/50 focus:outline-none" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, i) => (
              <button key={conv.id} className={`w-full p-4 flex gap-3 hover:bg-white/5 transition text-left border-b border-white/5 ${i === 0 ? 'bg-white/5' : ''}`}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold">{conv.guest[0]}</div>
                  {conv.unread && <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-[#111]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`font-medium truncate ${conv.unread ? 'text-white' : 'text-white/70'}`}>{conv.guest}</p>
                    <span className="text-xs text-white/40">{conv.time}</span>
                  </div>
                  <p className="text-xs text-white/40 truncate">{conv.property}</p>
                  <p className={`text-sm truncate ${conv.unread ? 'text-white/80' : 'text-white/50'}`}>{conv.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl flex flex-col">
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold">C</div>
            <div>
              <p className="font-medium">Carlos Rodríguez</p>
              <p className="text-xs text-white/40">Apartamento Bocagrande</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start"><div className="max-w-[70%] bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3"><p className="text-sm">¡Hola! Estoy muy emocionado por mi visita.</p><p className="text-xs text-white/40 mt-1">10:30 AM</p></div></div>
            <div className="flex justify-end"><div className="max-w-[70%] bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-2xl rounded-br-sm px-4 py-3"><p className="text-sm">¡Hola Carlos! Bienvenido, estamos encantados de recibirte.</p><p className="text-xs text-black/50 mt-1">10:35 AM</p></div></div>
            <div className="flex justify-start"><div className="max-w-[70%] bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3"><p className="text-sm">¿A qué hora puedo hacer el check-in?</p><p className="text-xs text-white/40 mt-1">10:40 AM</p></div></div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Escribe un mensaje..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/30 focus:border-amber-500/50 focus:outline-none" />
              <button className="p-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
