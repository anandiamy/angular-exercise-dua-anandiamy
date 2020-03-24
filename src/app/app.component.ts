import {Component} from '@angular/core';

interface Food {
  id: number;
  title: string;
  body: string;
  vote: number;
  image: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';
  body = '';
  image = [];

  foodList: Food[] = [
    {
      id: 1,
      title: 'Buah-buahan segar',
      body: 'Terdiri dari apel, manggis, jeruk, dan semangka.',
      vote: 32,
      image: [
        'https://2.bp.blogspot.com/-FMTgmgerMwQ/UupvJjX66RI/AAAAAAAAAuA/YB1SxUIgdi8/s1600/apple-icon.png',
        'https://cairofood.id/wp-content/uploads/penggunaan-buah-pada-makanan-256x256.jpg']
    },
    {
      id: 2,
      title: 'Makanan Berat',
      body: 'Makanan yang cocok untuk makan sehari-hari',
      vote: 99,
      image: [
        'https://4.bp.blogspot.com/-g0O6Co5HsQI/Twh9zm8rdtI/AAAAAAAAAUE/PEi8pv_B8GM/s1600/shchi-russian-sauerkraut-soup-2.jpg',
        'https://3.bp.blogspot.com/-GIE8iACnqnc/VoojkwQl_JI/AAAAAAAAAXc/6OmHBsV8JpA/s1600/23841703%255B1%255D.jpg'
      ]
    },
    {
      id: 3,
      title: 'Goreng-gorengan',
      body: 'Makanan berminyak yang sangat sedap untuk dinikmati dihari hujan',
      vote: 13,
      image: [
        'https://66.media.tumblr.com/avatar_1702307b08b0_128.pnj',
        'https://pbs.twimg.com/profile_images/3286674581/517664635aa3b1c19e47bfd62d320e90.jpeg'
      ]
    }
  ];

  onRemove(id: number) {
    const index = this.foodList.findIndex(food => food.id === id);

    this.foodList.splice(index, 1);
  }

  kirim() {
    this.foodList.push({
      id: this.foodList.length + 1,
      title: this.title,
      body: this.body,
      vote: 0,
      image: [
        this.image[0],
        this.image[1]
      ]
    });

    console.log(this.foodList);
  }
}
