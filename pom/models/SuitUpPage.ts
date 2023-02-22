import { expect, Locator, Page } from '@playwright/test';

export class SuitUpPage {
  readonly page: Page;
  readonly bayc: Locator;
  readonly clothing: Locator;
  readonly accessories: Locator;
  readonly background: Locator;
  readonly closeIconBackground: Locator;
  readonly royalties: Locator;
  readonly modalTitle: Locator;
  readonly royaltiesCloseIcon: Locator;
  readonly previewBtn: Locator;
  readonly dropdownArtist: Locator;
  readonly artistStlFc: Locator;

  constructor(page: Page) {
        
        this.page = page;
        this.bayc = page.locator('img[alt="1013"]');
        this.clothing = page.locator('img[src="/demo/resources/Basic King/bayc/clothes/Black Jersey-min.png"]');
        this.accessories = page.locator('img[src="/demo/resources/Basic King/bayc/headgear/Black Hat-min.png"]');
        this.background = page.locator('img[src="/demo/resources/Smart Token Labs/bayc/background/Bananas-min.png"]');
        this.closeIconBackground = page.locator('div#carouselbackground div div div img[alt="close"]');
        this.royalties = page.locator('img[alt="question"]');
        this.modalTitle = page.locator('div.font-black');
        this.royaltiesCloseIcon = page.locator('button.h-8.w-8');
        this.previewBtn = page.locator('//span[text()="Preview"]');
        this.dropdownArtist = page.locator('div.dropdown-trigger');
        this.artistStlFc = page.locator('ul.dropdown-list.dropdown-list-desktop>li:nth-child(5)');
    }
    async goto() {
        await this.page.goto('https://brandextender.io/demo/tailor/');
      }
      async Suitup() {
        await this.bayc.click();
        await this.clothing.click();
        await this.page.mouse.wheel(0, 200);
        await this.accessories.click();
        await this.background.click();
        await this.closeIconBackground.click();
        await this.royalties.click();
        await expect(this.modalTitle).toBeVisible();
        await this.royaltiesCloseIcon.click();
        await this.previewBtn.click();
      }
    async Dropdown(){
      await this.bayc.click();
      await this.dropdownArtist.click();
      await this.artistStlFc.click();
    }
}
