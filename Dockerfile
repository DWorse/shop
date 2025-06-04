# Стейдж 1: збірка з Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Копіюємо лише backend (де лежить pom.xml і src)
COPY backend ./backend

# Переходимо в backend і збираємо jar
WORKDIR /app/backend
RUN mvn clean package -DskipTests

# Стейдж 2: рантайм Java
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Копіюємо зібраний .jar з білд-стейджу
COPY --from=build /app/backend/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
