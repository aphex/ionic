import { Animation } from '../../../index';

/**
 * Md Loading Leave Animation
 */
export default function mdLeaveAnimation(Animation: Animation, baseEl: HTMLElement): Promise<Animation> {
  const baseAnimation = new Animation();

  const backdropAnimation = new Animation();
  backdropAnimation.addElement(baseEl.querySelector('.loading-backdrop'));

  const wrapperAnimation = new Animation();
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));

  backdropAnimation.fromTo('opacity', 0.5, 0);

  wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('ease-in-out')
    .duration(200)
    .add(backdropAnimation)
    .add(wrapperAnimation));
}
