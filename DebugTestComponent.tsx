interface DebugTestComponentProps {
  content: any;
}

export default function DebugTestComponent({ content }: DebugTestComponentProps) {
  return (
    <div className="fixed top-32 left-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
      <div className="text-xs font-bold mb-2">🧪 LIVE TEST COMPONENT</div>
      <div className="text-sm">
        <div>Badge: <span className="font-mono bg-black px-1 rounded">{content.hero?.badge || 'NOT FOUND'}</span></div>
        <div>Line 1: <span className="font-mono bg-black px-1 rounded">{content.hero?.headline?.line1 || 'NOT FOUND'}</span></div>
      </div>
      <div className="text-xs mt-2 opacity-75">
        Updates: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}