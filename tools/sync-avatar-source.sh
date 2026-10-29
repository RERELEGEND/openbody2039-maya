#!/usr/bin/env bash
# 可选：从外部兼容 viewer 检出同步到本包 avatar-source/（开发双端时用）
# 环境：ubuntu 22.04 · bash
# 用法：
#   bash tools/sync-avatar-source.sh /path/to/viewer
# viewer 根目录须含：src/jointDefs.js、src/facePresets.js、src/expressionCatalog.js、
#   src/actionFlow.js、docs/dev/DETAILED_JOINT_VERIFY.md（或 docs/DETAILED_JOINT_VERIFY.md）
set -euo pipefail

SRC="${1:-}"
if [[ -z "$SRC" || ! -d "$SRC" ]]; then
  echo "用法: $0 /path/to/viewer-root"
  exit 1
fi
SRC="$(cd "$SRC" && pwd)"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DST="$ROOT/avatar-source"

need() {
  local f="$1"
  if [[ ! -f "$f" ]]; then
    echo "缺少: $f"
    exit 1
  fi
}

need "$SRC/src/jointDefs.js"
need "$SRC/src/facePresets.js"
need "$SRC/src/expressionCatalog.js"
need "$SRC/src/actionFlow.js"

VERIFY="$SRC/docs/dev/DETAILED_JOINT_VERIFY.md"
[[ -f "$VERIFY" ]] || VERIFY="$SRC/docs/DETAILED_JOINT_VERIFY.md"
need "$VERIFY"

mkdir -p "$DST/src" "$DST/docs"
cp -a "$SRC/src/jointDefs.js" "$DST/src/"
cp -a "$SRC/src/facePresets.js" "$DST/src/"
cp -a "$SRC/src/expressionCatalog.js" "$DST/src/"
cp -a "$SRC/src/actionFlow.js" "$DST/src/"
cp -a "$VERIFY" "$DST/docs/DETAILED_JOINT_VERIFY.md"

# 可选：同步舞蹈关键帧
if [[ -f "$SRC/public/amass-trial/dance.json" ]]; then
  mkdir -p "$ROOT/body-graph/motions"
  cp -a "$SRC/public/amass-trial/dance.json" "$ROOT/body-graph/motions/dance.json"
  echo "synced motions/dance.json"
fi

echo "synced → $DST"
echo "下一步: cd $ROOT && npm run export:graph"
