import React from 'react';
import { Skull, AlertTriangle, FileSearch, ShieldAlert, Activity, ClipboardList, Info, Crosshair, Zap, Building2, MapPin } from 'lucide-react';

const App = () => {
  const dataRUP = [
    {
      id: "66472376",
      pagu: 743538600,
      mak: "1.06.04.2.01.0003.5.1.02.01.001.00039",
      program: "Pembayaran Pekerjaan TA Sebelumnya (1)",
      metode: "Pengadaan Langsung",
      sumber: "APBDP 2026",
      pdn: "Ya",
      ukm: "Ya",
      spp: "Tidak (Ekon, Sos, Lingk)",
      lokasi: "Dinas Sosial, Kota Tasikmalaya",
      jadwal: "Maret 2026"
    },
    {
      id: "66472252",
      pagu: 783420900,
      mak: "1.06.04.2.01.0001.5.1.02.01.001.00039",
      program: "Pembayaran Pekerjaan TA Sebelumnya (2)",
      metode: "Pengadaan Langsung",
      sumber: "APBDP 2026",
      pdn: "Ya",
      ukm: "Ya",
      spp: "Tidak (Ekon, Sos, Lingk)",
      lokasi: "Dinas Sosial, Kota Tasikmalaya",
      jadwal: "Maret 2026"
    },
    {
      id: "66472446",
      pagu: 451985205,
      mak: "1.06.04.2.02.0003.5.1.02.01.001.00039",
      program: "Pembayaran Pekerjaan TA Sebelumnya (3)",
      metode: "Pengadaan Langsung",
      sumber: "APBDP 2026",
      pdn: "Ya",
      ukm: "Ya",
      spp: "Tidak (Ekon, Sos, Lingk)",
      lokasi: "Dinas Sosial, Kota Tasikmalaya",
      jadwal: "Maret 2026"
    }
  ];

  const totalPagu = dataRUP.reduce((acc, curr) => acc + curr.pagu, 0);

  const formatIDR = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="min-h-screen bg-neutral-950 text-red-600 p-2 md:p-10 font-serif flex flex-col items-center gap-12 select-none">
      
      {/* SECTION 1: COVER / HEADLINE (A4 Style) */}
      <section className="w-full max-w-[800px] aspect-[1/1.414] bg-black border-[12px] border-red-950 flex flex-col p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] pointer-events-none"></div>
        <div className="absolute -right-20 -top-20 opacity-5 rotate-12"><Skull size={400} /></div>
        
        <div className="flex justify-center mb-8 relative z-10">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgQQW6S_rJBjt8LnCRp_i3UUJLnTWfU8LgApydZ2idmn42EGenrKdNQSraFXQc1tAqHv1tyABZkGCYSWawGo5GZsVzi_eeJvB_mhl3ROES7ywWtxjfsqE9TwUbU83eRfVNCGYwfxL5nGca_q4a74-HYUp3HOXbXgcZIrZNWXBIM4pGYeieYaYg8p-eI" 
            className="w-32 h-auto drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" 
            alt="Logo PMII"
          />
        </div>

        <div className="text-center relative z-10 flex-1 flex flex-col justify-center">
          <h2 className="text-xl font-bold tracking-[0.4em] text-red-900 mb-4 uppercase">Laporan Investigasi Anggaran</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">ANGGARAN <span className="text-white block">HANTU</span> DINSOS</h1>
          <div className="h-2 bg-red-700 w-32 mx-auto mb-6"></div>
          <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold">PC PMII KOTA TASIKMALAYA</p>
        </div>

        <div className="mt-auto border-t-2 border-red-900 pt-8 relative z-10">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Akumulasi Dana Terhutang:</p>
              <p className="text-4xl md:text-5xl font-black text-red-600">{formatIDR(totalPagu)}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-zinc-600 uppercase">Tahun Anggaran</p>
              <p className="text-2xl font-bold text-zinc-300">2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DATA BREAKDOWN (A4 Style) */}
      <section className="w-full max-w-[800px] min-h-[1131px] bg-zinc-950 border-x border-red-900/30 flex flex-col p-8 md:p-12 relative shadow-2xl">
        <div className="flex items-center gap-4 border-b-2 border-red-700 pb-4 mb-8">
          <ClipboardList className="text-red-600" size={32} />
          <h2 className="text-2xl font-black uppercase">Detail Paket Penyedia</h2>
        </div>

        <div className="space-y-6">
          {dataRUP.map((rup, index) => (
            <div key={index} className="bg-neutral-900/50 border border-zinc-800 p-5 rounded-sm hover:border-red-600 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-red-800 text-black px-3 py-1 font-black text-xs">PAKET #{index + 1}</span>
                <span className="text-zinc-500 text-[10px] font-mono">RUP ID: {rup.id}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <label className="text-[10px] text-zinc-600 uppercase font-bold block mb-1">Nama Paket & Volume:</label>
                  <p className="text-sm font-bold text-zinc-200">Pembayaran Pekerjaan Tahun Sebelumnya (Vol: 1)</p>
                </div>
                <div>
                  <label className="text-[10px] text-zinc-600 uppercase font-bold block mb-1">Nilai Pagu:</label>
                  <p className="text-lg font-black text-red-500">{formatIDR(rup.pagu)}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-600 uppercase font-bold block mb-1">Kode Rekening (MAK):</label>
                  <p className="text-[11px] font-mono text-zinc-400 bg-black p-2 border border-zinc-800">{rup.mak}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:col-span-2">
                  <div className="bg-black/50 p-2 border border-zinc-800">
                    <p className="text-[9px] text-zinc-500 uppercase">Metode Pemilihan</p>
                    <p className="text-xs font-bold text-red-400">{rup.metode}</p>
                  </div>
                  <div className="bg-black/50 p-2 border border-zinc-800">
                    <p className="text-[9px] text-zinc-500 uppercase">Sumber Dana</p>
                    <p className="text-xs font-bold text-red-400">{rup.sumber}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 md:col-span-2 text-[9px] uppercase font-bold text-zinc-500 text-center">
                  <div className={`p-1 border ${rup.pdn === 'Ya' ? 'border-red-900 text-red-500' : 'border-zinc-800'}`}>PDN: {rup.pdn}</div>
                  <div className={`p-1 border ${rup.ukm === 'Ya' ? 'border-red-900 text-red-500' : 'border-zinc-800'}`}>Usaha Kecil: {rup.ukm}</div>
                  <div className="p-1 border border-zinc-800">SPP: {rup.spp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-red-950/20 border-l-4 border-red-600">
          <div className="flex items-center gap-3 mb-2">
            <Info className="text-red-500" size={20} />
            <h4 className="text-sm font-black uppercase text-red-500 tracking-widest">Informasi Teknis Satker</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2"><Building2 size={14} /> DINAS SOSIAL</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> KOTA TASIKMALAYA</div>
            <div className="flex items-center gap-2"><Zap size={14} /> PRA DIPA/DPA: TIDAK</div>
            <div className="flex items-center gap-2"><Activity size={14} /> JENIS: BARANG</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CRITIQUE & CALL TO ACTION (A4 Style) */}
      <section className="w-full max-w-[800px] aspect-[1/1.414] bg-black border-4 border-red-900 flex flex-col p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-4 border-b-2 border-red-700 pb-4 mb-10">
          <FileSearch className="text-red-600" size={32} />
          <h2 className="text-2xl font-black uppercase">Analisis & Tuntutan</h2>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            {[
              { icon: <Crosshair className="text-red-600" />, title: "Skema Pengadaan Langsung", text: "Total akumulasi hampir 2 Milyar Rupiah dipecah menjadi 3 paket dengan metode 'Pengadaan Langsung'. PMII mencurigai adanya upaya menghindari Tender terbuka." },
              { icon: <Zap className="text-red-600" />, title: "Urgensi Pembayaran Kilat", text: "Seluruh paket direncanakan selesai hanya pada bulan Maret 2026. Mengapa ada ketergesaan dalam mencairkan hutang pekerjaan masa lalu?" },
              { icon: <ShieldAlert className="text-red-600" />, title: "Kegagalan Manajerial", text: "Pembayaran pekerjaan tahun sebelumnya membuktikan adanya kegagalan perencanaan dan eksekusi pada TA sebelumnya. Siapa yang bertanggung jawab?" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-black text-zinc-100 uppercase mb-1 group-hover:text-red-500 transition-colors">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-700 p-8 text-black text-center relative shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            <h3 className="text-3xl font-black uppercase mb-2">AUDIT INVESTIGATIF!</h3>
            <p className="font-bold text-sm uppercase tracking-widest">PC PMII Kota Tasikmalaya menuntut transparansi penuh atas dana Rp 1,97 Miliar ini.</p>
          </div>
        </div>

        <footer className="mt-auto pt-10 text-center">
          <img 
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgQQW6S_rJBjt8LnCRp_i3UUJLnTWfU8LgApydZ2idmn42EGenrKdNQSraFXQc1tAqHv1tyABZkGCYSWawGo5GZsVzi_eeJvB_mhl3ROES7ywWtxjfsqE9TwUbU83eRfVNCGYwfxL5nGca_q4a74-HYUp3HOXbXgcZIrZNWXBIM4pGYeieYaYg8p-eI" 
            className="w-16 h-auto mx-auto mb-4 opacity-50 grayscale hover:grayscale-0 transition-all" 
            alt="Logo PMII"
          />
          <p className="text-[10px] text-zinc-700 uppercase font-black tracking-[0.5em]">Tangan Terkepal Dan Maju Ke Muka</p>
          <p className="text-[8px] text-zinc-800 mt-2">Dibuat Berdasarkan Data RUP SiRUP LKPP TA 2026 - Dinas Sosial Kota Tasikmalaya</p>
        </footer>
      </section>

    </div>
  );
};

export default App;
