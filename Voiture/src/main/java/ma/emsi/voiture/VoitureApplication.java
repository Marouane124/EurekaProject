package ma.emsi.voiture;

import ma.emsi.voiture.entitites.Client;
import ma.emsi.voiture.entitites.Voiture;
import ma.emsi.voiture.repositories.VoitureRepository;
import ma.emsi.voiture.services.ClientService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class VoitureApplication {

	public static void main(String[] args) {
		SpringApplication.run(VoitureApplication.class, args);
	}

	@Bean
	CommandLineRunner initialiserBaseH2(VoitureRepository voitureRepository,
										ClientService clientService){
		return args -> {
			Client c1 = clientService.clientById(2L);
			Client c2 = clientService.clientById(1L);
			System.out.println("**************************");
			System.out.println("Id est " + c2.getId());
			System.out.println("Nom est " + c2.getNom());
			System.out.println("**************************");
			System.out.println("**************************");
			System.out.println("Id est " + c1.getId());
			System.out.println("Nom est " + c1.getNom());
			System.out.println("**************************");

			voitureRepository.save(new Voiture(null, "Toyota","A 25 333", "Corolla", 1L, c2));
			voitureRepository.save(new Voiture(null, "Renault","B 6 3456", "Megane", 1L, c2));
			voitureRepository.save(new Voiture(null, "Peugeot","A 55 4444", "301", 2L, c1));
		};
	}

}