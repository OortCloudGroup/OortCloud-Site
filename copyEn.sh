#!/usr/bin/env bash

# 这个脚本将 AI 生成的 thirdHtml 多语言目录复制到 dist 对应语言目录中
# 以便在生成静态站点时包含这些多语言静态文件

set -euo pipefail

SOURCE_DIR="thirdHtml"
TARGET_ROOT="dist"
LANGUAGES=("en" "es" "ar" "de" "fr" "ja" "pt" "ru" "ko" "id" "tr")

if [ ! -d "$SOURCE_DIR" ]; then
  echo "[copyEn] 未找到源目录: $SOURCE_DIR，跳过复制。"
  exit 0
fi

mkdir -p "$TARGET_ROOT"

for LANGUAGE in "${LANGUAGES[@]}"; do
  SOURCE_LANGUAGE_DIR="$SOURCE_DIR/$LANGUAGE"
  TARGET_LANGUAGE_DIR="$TARGET_ROOT/$LANGUAGE"

  if [ ! -d "$SOURCE_LANGUAGE_DIR" ]; then
    echo "[copyEn] 未找到语言目录: $SOURCE_LANGUAGE_DIR，跳过。"
    continue
  fi

  # 如果目标语言目录已存在，先删除，避免残留旧文件
  if [ -d "$TARGET_LANGUAGE_DIR" ]; then
    rm -rf "$TARGET_LANGUAGE_DIR"
  fi

  mkdir -p "$TARGET_LANGUAGE_DIR"

  # 复制当前语言目录下所有文件（包含隐藏文件）到 dist/语言缩写
  cp -R "$SOURCE_LANGUAGE_DIR"/. "$TARGET_LANGUAGE_DIR"/

  echo "[copyEn] 已完成复制: $SOURCE_LANGUAGE_DIR -> $TARGET_LANGUAGE_DIR"
done

echo "[copyEn] 多语言 HTML 复制完成。"
