import { Animation } from '../../../index';

/**
 * Md Popover Leave Animation
 */
export default function mdLeaveAnimation(Animation: Animation, baseEl: HTMLElement): Promise<Animation> {
  const baseAnimation = new Animation();

  const backdropAnimation = new Animation();
  backdropAnimation.addElement(baseEl.querySelector('.popover-backdrop'));

  const wrapperAnimation = new Animation();
  wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));

  wrapperAnimation.fromTo('opacity', 0.99, 0);
  backdropAnimation.fromTo('opacity', 0.08, 0);

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('ease')
    .duration(500)
    .add(backdropAnimation)
    .add(wrapperAnimation));
}
