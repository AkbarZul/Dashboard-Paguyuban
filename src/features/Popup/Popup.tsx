import { ReactNode } from 'react'
import { usePopup } from '@/contexts/PopupContext'
import { X } from 'lucide-react'

interface Props {
  title: string
  children: ReactNode
  footer?: ReactNode
  maxWidth?: string
  handleClose?: () => void
}

const Modal = ({
  title,
  children,
  footer,
  maxWidth = 'max-w-md',
  handleClose
}: Props) => {
  const { isOpen } = usePopup()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-xl shadow-lg w-full ${maxWidth} overflow-hidden flex flex-col max-h-full`}
      >
        {/* HEADER */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-800">{title}</h3>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto">{children}</div>

        {/* FOOTER */}
        {footer && (
          <div className="p-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal