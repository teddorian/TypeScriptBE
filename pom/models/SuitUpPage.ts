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
  readonly cancelBtn: Locator;
  readonly dropdownArtist: Locator;
  readonly artistStlFc: Locator;
  readonly stlfcJersey: Locator;
  readonly carouselCloses: Locator;
  readonly walesJersey: Locator;
  readonly counterPlus: Locator;
  readonly counterMinus: Locator;
  readonly edit: Locator;
  readonly customizeAnother: Locator;
  readonly coolCats: Locator;
  readonly coolCatsMobile: Locator;
  readonly clothingCoolCats: Locator;
  readonly remove: Locator;
  readonly mintBtn: Locator;

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
  this.cancelBtn = page.locator('//span[text()="Cancel"]');
  this.dropdownArtist = page.locator('div.dropdown-trigger');
  this.artistStlFc = page.locator('ul.dropdown-list.dropdown-list-desktop>li:nth-child(5)');
  this.stlfcJersey = page.locator('img[src="/demo/resources/STL FC/bayc/clothes/Argentina Jersey-min.png"]');
  this.carouselCloses = page.locator('#carouselclothes');
  this.walesJersey = page.locator('img[src="/demo/resources/STL FC/bayc/clothes/Wales Jersey-min.png"]');
  this.counterPlus = page.locator("img[alt='plus']");
  this.counterMinus = page.locator("img[alt='minus']");
  this.edit = page.locator('//*[@id="routify-app"]/div[2]/main/section/div[2]/div[2]/div[4]/div[1]');
  this.customizeAnother = page.locator('div.order-last .be-button');
  this.coolCats = page.locator("img[alt='9812']");
  this.coolCatsMobile = page.locator('//*[@id="routify-app"]/div[2]/main/div/div[2]/div[4]/div');
  this.clothingCoolCats = page.locator('img[src="/demo/resources/Devcon/coolcats/clothes/D CC Outfit Logo 1-min.png"]');
  this.remove = page.locator('//*[@id="routify-app"]/div[2]/main/section/div[2]/div[2]/div[4]/div[2]');
  this.mintBtn = page.locator('div.w-full div.w-full:nth-child(2)');
  }
async goto() {
  await this.page.goto('https://brandextender.io/demo/tailor/', { waitUntil: 'networkidle' });
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
    if (!this.page.isClosed()) {
    await this.page.goBack();
    }
    console.log(`Current URL: ${this.page.url()}`);
  }
async Dropdown() {
  await this.bayc.click();
  await this.dropdownArtist.click();
  await this.artistStlFc.click();
  await expect(this.stlfcJersey).toBeVisible();
  await this.page.mouse.wheel(10000, 0);
  await expect(this.walesJersey).toBeVisible();
  }

async Preview(){
  await this.bayc.click();
  await this.cancelBtn.click();
  await this.bayc.click();
  await this.clothing.click();
  await this.counterPlus.click();
  await this.counterPlus.click();
  await this.previewBtn.click();
  await this.edit.click();
  await this.counterMinus.click();
  await this.counterMinus.click();
  await this.previewBtn.click();
  await this.customizeAnother.click();
  await this.page.mouse.wheel(0, 400);
  await this.coolCats.click();
  await this.clothingCoolCats.click();
  await this.previewBtn.click();
  await this.remove.click();
  await this.mintBtn.click();
}
async SuitupMobile() {
  await this.bayc.click();
  await this.page.mouse.wheel(0, 400);
  await this.clothing.click();
  await this.page.mouse.wheel(0, 400);
  await this.accessories.click();
  await this.page.mouse.wheel(0, 400);
  await this.background.click();
  await this.closeIconBackground.click();
  await this.royalties.click();
  await expect(this.modalTitle).toBeVisible();
  await this.royaltiesCloseIcon.click();
    if (!this.page.isClosed()) {
    await this.page.goBack();
    }
    console.log(`Current URL: ${this.page.url()}`);
  }
  async PreviewMobile(){
    await this.bayc.click();
    await this.cancelBtn.click();
    await this.bayc.click();
    await this.page.mouse.wheel(0, 300);
    await this.clothing.click();
    await this.counterPlus.click();
    await this.counterPlus.click();
    await this.previewBtn.click();
    await this.edit.click();
    await this.counterMinus.click();
    await this.counterMinus.click();
    await this.previewBtn.click();
    await this.customizeAnother.click();
    await this.page.mouse.wheel(0, 300);
    await this.coolCatsMobile.click();
    await this.page.mouse.wheel(0, 400);
    await this.clothingCoolCats.click();
    await this.previewBtn.click();
    await this.remove.click();
    await this.mintBtn.click();
  }
}
