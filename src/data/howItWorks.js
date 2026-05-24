import { MousePointerClick, FileCheck, Download, MonitorPlay, Rocket } from 'lucide-react';

const howItWorks = [
  {
    id: 'step-1',
    step: 1,
    title: 'Pilih Aset',
    description: 'Jelajahi katalog dan temukan aset yang sesuai dengan genre dan kebutuhan game Anda.',
    icon: MousePointerClick,
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Cek Format & Lisensi',
    description: 'Pastikan format file dan tipe lisensi sesuai dengan engine dan jenis proyek Anda.',
    icon: FileCheck,
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Download File',
    description: 'Setelah pembelian atau request, download file aset dalam format yang sudah terorganisir.',
    icon: Download,
  },
  {
    id: 'step-4',
    step: 4,
    title: 'Import ke Game Engine',
    description: 'Import aset langsung ke Unity, Godot, Unreal, atau engine pilihan Anda.',
    icon: MonitorPlay,
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Mulai Bangun Game',
    description: 'Fokus pada gameplay, mekanik, dan cerita. Biarkan aset kami mempercepat produksi Anda.',
    icon: Rocket,
  },
];

export default howItWorks;
