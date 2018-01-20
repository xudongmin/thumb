class PraiseButton {
	constructor(count, element,dianzanEle) {
		this.count = count;
		this.element = element;
		this.dianzanEle = dianzanEle;
	}
	clickAction() {
		$(this.element).click(()=>{
			if(this.count >=10) {
				this.count = 0;
				$(this.element).css("webkit-filter","grayscale(100%)");
				$(this.dianzanEle).text(0);
				$("#jiaone").hide();
			} else {
				$(this.element).css("webkit-filter","grayscale(0)");
				var dianzanShu = add(this.count);
				$(this.dianzanEle).text(dianzanShu);
				$("#jiaone").show();
				this.count++;
				setTimeout(()=>{
					$("#jiaone").hide();
				},1000);
			}
		});
	}
}
export class Thumb extends PraiseButton {
	constructor(count, element,dianzanEle){
		super(count, element,dianzanEle);
	}
}
