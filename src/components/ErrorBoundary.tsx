"use client";

import { Component, type ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

function RebootButton({ onReset }: { onReset: () => void }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        onReset();
        router.push("/");
      }}
      className="btn-cute px-5 py-2 bg-[#ff6ec7] text-black font-bold cursor-pointer"
    >
      REBOOT NURSERY
    </button>
  );
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a12] text-[#39ff14] font-mono p-6 text-center">
          <div>
            <p className="text-3xl mb-3">(×_×)</p>
            <h1 className="text-xl mb-2">OOPS — Pip tripped over a wire!</h1>
            <p className="mb-4 text-sm text-[#00ffff]">
              The nursery hit an unexpected error. Refresh to tuck him back in.
            </p>
            <RebootButton onReset={() => this.setState({ hasError: false })} />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}