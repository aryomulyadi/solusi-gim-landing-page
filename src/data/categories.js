import {
  Palette, Box, Layout, Users, Grid3X3, Music,
  Image, FileCode, Gamepad2, Cpu, Gem, Package
} from 'lucide-react';

const categories = [
  {
    id: 'cat-2d',
    name: '2D Asset',
    icon: Palette,
    description: 'Karakter, environment, dan elemen visual 2D untuk game platformer, RPG, dan casual.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'cat-3d',
    name: '3D Asset',
    icon: Box,
    description: 'Model 3D low-poly dan stylized untuk game mobile dan PC.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 'cat-ui',
    name: 'UI Kit',
    icon: Layout,
    description: 'Komponen UI lengkap: button, panel, HUD, menu, dan dialog box.',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    id: 'cat-sprite',
    name: 'Sprite Pack',
    icon: Users,
    description: 'Sprite sheet karakter dengan animasi idle, run, attack, dan jump.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 'cat-icon',
    name: 'Icon Pack',
    icon: Grid3X3,
    description: 'Ikon item, skill, inventory, dan status untuk game RPG dan casual.',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 'cat-sfx',
    name: 'Sound Effect',
    icon: Music,
    description: 'SFX gameplay: klik, ledakan, power-up, ambient, dan transisi.',
    color: 'from-rose-500 to-red-400',
  },
  {
    id: 'cat-bg',
    name: 'Background',
    icon: Image,
    description: 'Background parallax, skybox, dan tileable texture untuk berbagai genre.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    id: 'cat-template',
    name: 'Game Template',
    icon: FileCode,
    description: 'Template starter project lengkap dengan kode dan aset dasar.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    id: 'cat-unity',
    name: 'Unity Pack',
    icon: Gamepad2,
    description: 'Paket aset yang dioptimasi untuk Unity Engine dengan prefab siap pakai.',
    color: 'from-slate-400 to-gray-500',
  },
  {
    id: 'cat-unreal',
    name: 'Unreal Pack',
    icon: Cpu,
    description: 'Asset pack kompatibel dengan Unreal Engine, termasuk material dan blueprint.',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    id: 'cat-godot',
    name: 'Godot Pack',
    icon: Gem,
    description: 'Resource pack untuk Godot Engine dengan scene dan script GDScript.',
    color: 'from-sky-500 to-blue-400',
  },
  {
    id: 'cat-bundle',
    name: 'Bundle Pack',
    icon: Package,
    description: 'Paket bundling multi-aset dengan harga hemat untuk kebutuhan lengkap.',
    color: 'from-fuchsia-500 to-purple-400',
  },
];

export default categories;
