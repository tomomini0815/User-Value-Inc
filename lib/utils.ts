import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 画像パスを環境に応じて返すヘルパー関数
export const getImagePath = (path: string): string => {
  // Vercel環境では base が '/' なので、そのまま返す
  // GitHub Pages環境では base が '/User-Value-Inc/' なので、プレフィックスを追加
  const base = import.meta.env.BASE_URL || '/';

  // パスが既にベースURLを含んでいる場合は、それを削除
  const cleanPath = path.replace(/^\/User-Value-Inc\//, '/');

  // ベースURLが '/' の場合はそのまま、それ以外の場合はベースURLを追加
  if (base === '/') {
    return cleanPath;
  }

  return `${base.replace(/\/$/, '')}${cleanPath}`;
};

// アセットパスを返すヘルパー関数（publicディレクトリ内のファイル用）
export const getAssetPath = (filename: string): string => {
  return getImagePath(`/images/${filename}`);
};