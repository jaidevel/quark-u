import MicroModal from 'micromodal';

export default function initModal() {
  MicroModal.init({
    openTrigger: 'data-q-modal-open',
    closeTrigger: 'data-q-modal-close',
    disableScroll: true,
    awaitCloseAnimation: true
  });
}
