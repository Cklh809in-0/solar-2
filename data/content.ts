import { Sun, Zap, Lightbulb, Leaf, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function assetPath(path: string): string {
  return `/images/${path}`
}

export interface ProductImage {
  url: string
  title: string
  desc: string
}

export interface Author {
  name: string
  role: string
  class: string
  icon: string
  bio: string
  image?: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const productImages: ProductImage[] = [
  {
    url: assetPath('2aOboQdwEWqOj5eTc9Xx3nKDuytIz4xfrZmjHWzo.jpg'),
    title: 'Thiết Bị Hoàn Chỉnh',
    desc: 'Mô hình cảm biến ánh sáng mặt trời thông minh',
  },
  {
    url: assetPath('2aOboQdwD4l0wiReLiJDdBVVusph3qY4Q20aFmKW.jpg'),
    title: 'Chi Tiết Điện Tử',
    desc: 'Thiết bị có tấm pin mặt trời, mạch điện và các linh kiện',
  },
  {
    url: assetPath('2aOboQdwAtk8evPyJeqAt7VYs2lHlKgpNKThBvn6.jpg'),
    title: 'Bộ Dự Án Hoàn Chỉnh',
    desc: 'Toàn bộ hệ thống với quạt, tài liệu và các thành phần tích hợp',
  },
  {
    url: assetPath('8fb63b4d-8c32-495e-aa82-515071975107.jpeg'),
    title: 'Mô hình hoàn thiện',
    desc: 'Sản phẩm sau khi lắp ráp và vận hành thử nghiệm',
  },
]

export const authors: Author[] = [
  {
    name: 'Đinh Hoàng Khôi',
    role: 'Lên ý tưởng, Thiết kế web',
    class: 'Lớp 8A1',
    icon: '🔬',
    image: assetPath('khoi.jpg'),
    bio: 'Phụ trách nghiên cứu và phát triển ý tưởng chính của dự án.',
  },
  {
    name: 'Nguyễn Hà Gia Hưng',
    role: 'Lắp ráp linh kiện',
    class: 'Lớp 8A1',
    icon: '⚡',
    image: assetPath('hung.jpg'),
    bio: 'Thiết kế mạch điện và tích hợp cảm biến ánh sáng.',
  },
  {
    name: 'Nguyễn Huỳnh Tuấn Kiệt',
    role: 'Hỗ trợ kỹ thuật',
    class: 'Lớp 8A1',
    icon: '🔧',
    image: assetPath('kiet.jpg'),
    bio: 'Hỗ trợ xây dựng khung mô hình và lắp ráp linh kiện.',
  },
  {
    name: 'Nguyễn Huy Thông',
    role: 'Hỗ trợ kỹ thuật',
    class: 'Lớp 8A1',
    image: assetPath('thong.jpg'),
    icon: '💻',
    bio: 'Hỗ trợ viết code và xử lý tín hiệu cảm biến.',
  },
]

export const features: Feature[] = [
  {
    icon: Sun,
    title: 'Năng Lượng Mặt Trời',
    description: 'Sử dụng tấm pin mặt trời để cung cấp năng lượng bền vững',
  },
  {
    icon: Zap,
    title: 'Cảm Biến Thông Minh',
    description: 'Phát hiện thay đổi cường độ ánh sáng với độ chính xác cao',
  },
  {
    icon: Lightbulb,
    title: 'Điều Khiển Tự Động',
    description: 'Tự động kích hoạt LED khi phát hiện ánh sáng yếu',
  },
  {
    icon: Leaf,
    title: 'Thân Thiện Môi Trường',
    description: 'Giảm thiểu carbon footprint với năng lượng tái tạo',
  },
  {
    icon: Cpu,
    title: 'Vi Điều Khiển Thông Minh',
    description: 'Xử lý dữ liệu thời gian thực từ cảm biến ánh sáng',
  },
]
